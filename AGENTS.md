<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

## UI Component Conventions

### Global conventions
- Globally used components, or components with the potential for global use, are placed inside the `components/ui` directory inside `app`.

- Every component, globally or more locally-scoped or tied to another, are placed inside their own directories. Other related modules are also placed inside. For example:
```
.components/
├── ui/
│   └── Box
│       └── Box.tsx
│       └── styles.ts
```

### Material UI (MUI)

- Rely on the Material UI library for building the User Interface. Rely on custom-built JSX-based components only for complex components where the MUI library does not have a corresponding module.
  - Every component should be inside its own directory
  - Every custom component that uses MUI-based components and have custom styling applied via the `sx` or similar properties, should support a styling file based on CSS-in-JS rules. For example:

  ```javascript
    // Style file
    import { Theme } from '@mui/material'

    const styles = {
      avatar: (theme: Theme) => ({
        height: theme.userAvatarNav.height,
        width: theme.userAvatarNav.width,
      }),

      skeletonWrapper: {
        padding: '8px',
      },
    }

    export default styles
  ```

  ```javascript
    // Component file
    import styles from './styles'

    const NavItem: React.FC = () => {
      return (
        <Box sx={styles.skeletonWrapper}>
          <Box sx={styles.avatar}>Some content</Box>
        </Box>
      )
    }
  ```

- Maintain and sustain a configuration centered on theming, for potential and future theming changes on a global application scale. Use the existing framework on theming that Material UI supports.
    - Use a centralized `theme` subdirectory in the root of the `src` directory inside `app`.

    - Use a centralized theme provider and wrap it the global layout file of the app. `Theme Proviver structure`:
      ```javascript
        import CssBaseline from '@mui/material/CssBaseline'
        import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'

        import muiThemeConfig from './mui-theme-config'

        const theme = createTheme(muiThemeConfig as ThemeOptions)

        interface ThemeProps {
          children: React.ReactNode
        }

        const AppTheme: React.FC<ThemeProps> = ({ children }) => {
          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          )
        }

        export default AppTheme
      ```

    - Use a centralized theme configuration object, with organized and divided subdependencies to be imported and used inside it. `Theme configuration object`:
      ```javascript
        import components from './components'
        import paddings from './paddings'

        declare module '@mui/material/styles' {
          interface Theme {
            appBar: {
              height: string
            }
            paddings: {
              mainLayoutPadding: string
            }
          }
        }

        const theme = {
          appBar: {
            height: components.appBarHeight,
          },
          paddings,
        }

        export default theme
      ```

- All components and supported typing interfaces imported from the Material UI library should be wrapped in a local layer. For example:

```javascript
  import { CircularProgress, Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'

  export type ButtonProps = MUIButtonProps & {
    isLoading?: boolean
  }

  const Button: React.FC<ButtonProps> = ({ children, disabled, isLoading, ...props }) => {
    return (
      <MUIButton disabled={isLoading || disabled} {...props}>
        {isLoading ? <CircularProgress size={25} /> : children}
      </MUIButton>
    )
  }

  export default Button
```

<!-- END:nextjs-agent-rules -->
