module.exports = (plop) => {
  plop.setGenerator("base", {
    description: "Create a base component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your base component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/base/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.props.ts",
        templateFile: "plop-templates/base/base.props.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "plop-templates/base/base.style.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/base/base.view.tsx.hbs",
      },
      {
        type: "add",
        path: "src/collections/base/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/collection/base.tsx.hbs",
      },
      {
        type: "append",
        path: "src/navigation/NavigationService.tsx",
        pattern: "// PLOP_COMPONENT_TYPE",
        template: " {{ pascalCase name }}Collection: undefined;",
      },
      {
        type: "append",
        path: "src/screens/Stories/index.tsx",
        pattern: "/*_PLOP_INJECT_COMPONENT_SCREEN */",
        template:
          "{name: '{{pascalCase name}}', onPress: () => NavigationService.navigate('{{ pascalCase name }}Collection')},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_NAVIGATOR_SCREEN",
        template: "{func: {{ pascalCase name}}Collection, custom: false},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_COLLECTION_IMPORT",
        template:
          "import {{pascalCase name}}Collection from 'src/collections/base/{{pascalCase name}}'",
      },
    ],
  });
  plop.setGenerator("layout", {
    description: "Create a layout component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your layout component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/layout/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/layout/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/layout/{{pascalCase name}}/{{pascalCase name}}.props.ts",
        templateFile: "plop-templates/layout/layout.props.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/layout/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "plop-templates/layout/layout.style.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/layout/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/layout/layout.view.tsx.hbs",
      },
      {
        type: "add",
        path: "src/collections/layout/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/collection/layout.tsx.hbs",
      },
      // {
      //   type: "append",
      //   path: "src/navigation/NavigationService.tsx",
      //   pattern: "// PLOP_COMPONENT_TYPE",
      //   template: " {{ pascalCase name }}Collection: undefined;",
      // },
      // {
      //   type: "append",
      //   path: "src/screens/Stories/index.tsx",
      //   pattern: "/*_PLOP_INJECT_COMPONENT_SCREEN */",
      //   template:
      //     "{name: '{{pascalCase name}}', onPress: () => NavigationService.navigate('{{ pascalCase name }}Collection')},",
      // },
      // {
      //   type: "append",
      //   path: "src/navigation/NavigationStack.tsx",
      //   pattern: "// PLOP_INJECT_NAVIGATOR_SCREEN",
      //   template: "{func: {{ pascalCase name}}Collection, custom: false},",
      // },
      // {
      //   type: "append",
      //   path: "src/navigation/NavigationStack.tsx",
      //   pattern: "// PLOP_INJECT_COLLECTION_IMPORT",
      //   template:
      //     "import {{pascalCase name}}Collection from 'src/collections/base/{{pascalCase name}}'",
      // },
    ],
  });
  plop.setGenerator("base", {
    description: "Create a base component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your base component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/base/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.props.ts",
        templateFile: "plop-templates/base/base.props.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "plop-templates/base/base.style.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/base/base.view.tsx.hbs",
      },
      {
        type: "add",
        path: "src/collections/base/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/collection/base.tsx.hbs",
      },
      {
        type: "append",
        path: "src/navigation/NavigationService.tsx",
        pattern: "// PLOP_COMPONENT_TYPE",
        template: " {{ pascalCase name }}Collection: undefined;",
      },
      {
        type: "append",
        path: "src/screens/Stories/index.tsx",
        pattern: "/*_PLOP_INJECT_COMPONENT_SCREEN */",
        template:
          "{name: '{{pascalCase name}}', onPress: () => NavigationService.navigate('{{ pascalCase name }}Collection')},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_NAVIGATOR_SCREEN",
        template: "{func: {{ pascalCase name}}Collection, custom: false},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_COLLECTION_IMPORT",
        template:
          "import {{pascalCase name}}Collection from 'src/collections/base/{{pascalCase name}}'",
      },
    ],
  });
  plop.setGenerator("module", {
    description: "Create a module component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your module component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/module/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/module/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts",
        templateFile: "plop-templates/module/module.props.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "plop-templates/module/module.style.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/module/module.view.tsx.hbs",
      },
      {
        type: "add",
        path: "src/collections/module/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/collection/module.tsx.hbs",
      },
      {
        type: "append",
        path: "src/navigation/NavigationService.tsx",
        pattern: "// PLOP_COMPONENT_TYPE",
        template: " {{ pascalCase name }}Collection: undefined;",
      },
      {
        type: "append",
        path: "src/screens/Stories/index.tsx",
        pattern: "/*_PLOP_INJECT_COMPONENT_SCREEN */",
        template:
          "{name: '{{pascalCase name}}', onPress: () => NavigationService.navigate('{{ pascalCase name }}Collection')},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_NAVIGATOR_SCREEN",
        template: "{func: {{ pascalCase name}}Collection, custom: false},",
      },
      {
        type: "append",
        path: "src/navigation/NavigationStack.tsx",
        pattern: "// PLOP_INJECT_COLLECTION_IMPORT",
        template:
          "import {{pascalCase name}}Collection from 'src/collections/module/{{pascalCase name}}'",
      },
    ],
  });
  plop.setGenerator("screen", {
    description: "Create a screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/screen/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/{{pascalCase name}}.props.ts",
        templateFile: "plop-templates/screen/screen.props.ts.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/{{pascalCase name}}.style.ts",
        templateFile: "plop-templates/screen/screen.style.ts.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/screen/screen.view.tsx.hbs",
      },
      {
        type: "add",
        path: "src/screens/{{pascalCase name}}/{{pascalCase name}}.container.tsx",
        templateFile: "plop-templates/screen/screen.container.tsx.hbs",
      },
      {
        type: "append",
        path: "src/navigation/NavigationService.tsx",
        pattern: "// PLOP_SCREEN_TYPE",
        template: " {{ pascalCase name }}: undefined;",
      },
    ],
  });
};
