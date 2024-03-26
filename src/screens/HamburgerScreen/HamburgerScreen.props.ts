export interface HamburgerScreenGeneratedProps {
  onLogout: () => Promise<void>;
  merchantName: string | undefined;
  merchantImg: string | undefined;
  consumerFirstName: string | undefined;
  consumerLastName: string | undefined;
  role: string;
}
