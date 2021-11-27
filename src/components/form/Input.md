Size

```jsx
<Row style={{ gap: 10 }}>
  <Input size="large" />
  <Input />
  <Input size="small" />
</Row>
```

Status

```jsx
<Row style={{ gap: 10 }}>
  <Input status="success" width={270} value="asdasdsa" />
  <Input status="error" width={270} />
  <Input status="info" width={270} />
</Row>
```

Prefix / Suffix

```jsx
<Row style={{ gap: 10 }}>
  <Input prefix="https://" suffix=".com" width={270} size="large" />
  <Input suffix="/login" width={270} />
  <Input prefix="+998" width={270} size="small" />
</Row>
```

Disabled

```jsx
<Row style={{ gap: 10 }}>
  <Input disabled value="Alisa" prefix="https://" suffix=".com" width={270} />
  <Input disabled value="Alisa" />
  <Input disabled value="Alisa" status="error" />
</Row>
```
