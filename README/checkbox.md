- #### component Checkbox

| Prop          | Type       | Description                                                                                 |
| ------------- | ---------- | --------------------------------------------------------------------------------------------|
| `checked`     | `boolean`  | required, starting value for checked                                                        |
| `handleChange`| `function` | required, the function to control the value into state in the parent component              |
| `errorMessage`| `string or undefined`       | optional, can pass text displaying for an error                                       |
| `text`  | `string`   | optional, text for the checkbox                                                             |
| `className`   | `string`   | optional, styles can be passed for the component wrapper                                    |
| `{...rest}`   | `string`   | optional, any other attributes that are characteristic of the checkbox (type, etc) |