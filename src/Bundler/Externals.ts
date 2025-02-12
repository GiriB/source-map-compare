export interface ExternalLib {
  packageName: string;
  packageSemver: string;
  libraryVariable: string;
  scriptPath: string;
}

// When any of these package versions are updated in the package.json, we must also keep the CDN versions in a similar range.
export const externalLibs: ExternalLib[] = [
  {
    packageName: 'react',
    packageSemver: '^16.11.0',
    libraryVariable: 'React',
    scriptPath: '/umd/react.production.min.js'
  },
  {
    packageName: 'react-dom',
    packageSemver: '^16.11.0',
    libraryVariable: 'ReactDOM',
    scriptPath: '/umd/react-dom.production.min.js'
  },
  {
    packageName: '@fluentui/react',
    packageSemver: '^8.32.0',
    libraryVariable: 'FluentUIReact',
    scriptPath: '/dist/fluentui-react.min.js'
  }
];
