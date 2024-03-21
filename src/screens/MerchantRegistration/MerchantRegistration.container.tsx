import { useEffect, useState } from "react";
import MerchantRegistrationView from "./MerchantRegistration.view";
import { useNavigation } from "@react-navigation/native";
import {
  AdditionalForm,
  BasicForm,
  BusinessForm,
} from "./MerchantRegistration.props";
import * as Yup from "yup";
import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "../../types";
import NavigationService from "../../navigation/NavigationService";
import {
  Register,
  AddMerchant,
  Signin,
} from "../../services/react-query/queries/auth";
import { useStore } from "../../store";

const s3 = new S3({
  accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.EXPO_PUBLIC_AWS_REGION,
});

const MerchantRegistration = () => {
  const navigation = useNavigation();

  const { setIsLoggedIn, setTokens } = useStore((state) => ({
    setIsLoggedIn: state.setIsLoggedIn,
    setTokens: state.setTokens,
  }));

  const [page, setPage] = useState<number>(1);
  const [basicInitialValues, setBasicInitialValues] = useState<BasicForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [additionalInitialValues, setAdditionalInitialValues] =
    useState<AdditionalForm>({
      imageNumber: 0,
      restaurantName: "",
      category: "",
      address: "",
      latitude: 0,
      longitude: 0,
    });
  const [businessInitialValues, setBusinessInitialValues] =
    useState<BusinessForm>({
      license: "",
    });
  const [images, setImages] = useState<Image[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const {
    data: user,
    mutate: mutateRegister,
    isError: isErrorRegister,
  } = Register();
  const { data: merchant, mutate: mutateMerchant } = AddMerchant();
  const { mutate: mutateSignin } = Signin();

  const basicValidationSchema = Yup.object({
    firstName: Yup.string().required("Your first name is required"),
    lastName: Yup.string().required("Your last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string()
      .required("Your password is required")
      .min(6, "Your password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Your confirm password is required")
      .oneOf(
        [Yup.ref("password")],
        "Your password and confirm password must match"
      )
      .min(6, "Your password must be at least 6 characters"),
  });

  const additionalValidationSchema = Yup.object({
    imageNumber: Yup.number()
      .moreThan(0, "Your image is required")
      .required("Your image is required"),
    restaurantName: Yup.string().required("Your restaurant name is required"),
    category: Yup.string()
      .oneOf([
        "American",
        "Chinese",
        "Indian",
        "Italian",
        "Japanese",
        "Korean",
        "Mexican",
        "Thai",
        "Others",
      ])
      .required("Your category is required"),
    address: Yup.string().required("Your location is required"),
    latitude: Yup.number().required("Your location is required"),
    longitude: Yup.number().required("Your location is required"),
  });

  const businessValidationSchema = Yup.object({
    license: Yup.string().required("Your business license number is required"),
  });

  const handleSubmitBasic = (values: BasicForm) => {
    setBasicInitialValues(values);
    setPage((oldValue) => oldValue + 1);
  };

  const handleSubmitAdditional = (values: AdditionalForm) => {
    setAdditionalInitialValues(values);
    setPage((oldValue) => oldValue + 1);
  };

  const handleSubmitBusiness = (values: BusinessForm) => {
    setBusinessInitialValues(values);

    images.forEach(async (image) => {
      if (process.env.EXPO_PUBLIC_AWS_BUCKET_NAME && image.uri) {
        const uuid = uuidv4();
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const contentType = response.headers.get("Content-Type");

        if (contentType) {
          const params = {
            Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME,
            Key: `uploads/${uuid}-${image.fileName}`,
            Body: blob,
            ContentType: contentType,
          };

          const result = await s3.upload(params).promise();

          if (result.Location) {
            setImageUrls((oldValue) => [...oldValue, result.Location]);
          }
        }
      }
    });

    mutateRegister({
      email: basicInitialValues.email,
      password: basicInitialValues.password,
      firstName: basicInitialValues.firstName,
      lastName: basicInitialValues.lastName,
      role: "merchant",
    });
  };

  const handleSuccess = () => {
    mutateSignin(
      {
        email: basicInitialValues.email,
        password: basicInitialValues.password,
      },
      {
        onSuccess: (data) => {
          setTokens(data.accessToken, data.refreshToken);
          setIsLoggedIn(true);
        },
      }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });

    if (page === 1) {
      navigation.setOptions({
        headerTitle: "Create your account",
      });
    } else if (page === 2) {
      navigation.setOptions({
        headerTitle: "Set up your restaurant",
      });
    } else if (page === 3) {
      navigation.setOptions({
        headerTitle: "Verify your business",
      });
    }

    if (page === 1) {
      navigation.setOptions({
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                NavigationService.goBack();
              }}
              style={{ paddingLeft: 16, margin: 8 }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          );
        },
      });
    } else if (page === 2 || page === 3 || page === 3) {
      navigation.setOptions({
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                setPage((oldValue) => oldValue - 1);
              }}
              style={{ paddingLeft: 16, margin: 8 }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          );
        },
      });
    } else {
      navigation.setOptions({
        headerShown: false,
      });
    }
  }, [page]);

  useEffect(() => {
    if (imageUrls.length !== 0 && user) {
      mutateMerchant({
        name: additionalInitialValues.restaurantName,
        imageUrls: imageUrls,
        description: "test",
        address: additionalInitialValues.address,
        cuisineType: additionalInitialValues.category || "Others",
        cost: 3,
        operatingTimes: [
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
          {
            openingTime: new Date("1970-01-01T08:00:00.000-08:00"),
            closingTime: new Date("1970-01-01T20:00:00.000-08:00"),
          },
        ],
        isVerified: true,
        userId: user._id,
      });
    }
  }, [imageUrls, user]);

  useEffect(() => {
    if (merchant) {
      setPage((oldValue) => oldValue + 1);
    }
  }, [merchant]);

  const generatedProps = {
    page,
    isErrorRegister,
    basicInitialValues,
    additionalInitialValues,
    businessInitialValues,
    basicValidationSchema,
    additionalValidationSchema,
    businessValidationSchema,
    images,
    setImages,
    handleSubmitBasic,
    handleSubmitAdditional,
    handleSubmitBusiness,
    handleSuccess,
  };
  return <MerchantRegistrationView {...generatedProps} />;
};

export default MerchantRegistration;
