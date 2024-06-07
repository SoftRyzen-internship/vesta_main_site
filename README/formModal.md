- #### component FormModal

1) Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`
2) The application example - `<FormModal/>`


| Prop          | Type        | Description                                                                                  |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------|
| `openModal`        | `boolean`   | required, give created state `show={openModal}`                                              |
| `onClose`     | `() => void`| required, callback with false for your components state `onClose={() => setModalOpen(false)}`|
| `title`       | `string`    | required, text for the Title FormModal                                                           |
| `text`       | `string`    | required, text for the discription FormModal                                                           |
| `isSuccessful`| `boolean`   | required, set status for change title and text color                                                               |