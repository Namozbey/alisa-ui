Alisa UI uses [React context](https://reactjs.org/docs/context.html) in order to determine what class names to use when applying cosmetic styles to components. Using `TailwindThemeProvider` you can set your desired styling which will be used by all Alisa UI components nested within.

```jsx static
import { TailwindThemeProvider, Button } from 'alisa-ui'

const MyApp = () => (
  <TailwindThemeProvider
    theme={{
      brandColors: {
        primary: 'red',
      },
    }}
  >
    <FillButton brand="primary">Red button</FillButton>
  </TailwindThemeProvider>
)
```

Which would change the default blue colouring on the button to instead use the `.bg-red` class.

```jsx
<TailwindThemeProvider
  theme={{
    brandColors: {
      primary: 'red-400',
    },
  }}
>
  <FillButton brand="primary">Red button</FillButton>
</TailwindThemeProvider>
```

### Default theme

Obviously there's a fair bit more customisation on offer than just a button colour, but by using the `TailwindThemeProvider` wrapper around the React context provider you can override as much or as little as you need.

See below for the default values used by components:

```jsx noeditor
<Card is="code" border h={64} overflow="scroll" className="block">
  <CardBody is="pre">{JSON.stringify(defaultTheme, null, 1)}</CardBody>
</Card>
```
