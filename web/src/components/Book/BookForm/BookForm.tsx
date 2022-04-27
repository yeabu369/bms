import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const BookForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.book?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.book?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        
          <TextField
            name="author"
            defaultValue={props.book?.author}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="author" className="rw-field-error" />

        <Label
          name="copiesAvailable"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Copies available
        </Label>
        
          <NumberField
            name="copiesAvailable"
            defaultValue={props.book?.copiesAvailable}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="copiesAvailable" className="rw-field-error" />

        <Label
          name="publishedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published at
        </Label>
        
          <DatetimeLocalField
            name="publishedAt"
            defaultValue={formatDatetime(props.book?.publishedAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="publishedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BookForm
