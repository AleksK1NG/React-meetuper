import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { TextFieldAdapter } from '../../components/shared/TextFieldAdapter/TextFieldAdapter';
import { style } from '../shared/MaterialUIStyles/styles';
import uuid from 'uuid';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Loader from '../shared/Loader/Loader';
import {
  validateAuthors,
  validatePageCount,
  validate
} from '../../utils/validators';
import {
  bookSelector,
  loadingSelector,
  fetchBookById,
  updateBook
} from '../../ducks/books';

const EditBook = ({ book, loading, fetchBookById, id, updateBook }) => {
  useEffect(() => {
    fetchBookById(id);
  }, []);

  const onSubmit = (values, formApi) => {
    const newBook = { id: uuid().toString(), ...values };

    updateBook(id, newBook);
    return formApi.reset();
  };

  if (loading) return <Loader />;

  return (
    <Paper style={style.paper}>
      <Typography align="center" variant="h5" style={style.typo}>
        Edit Book
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={book}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
            submitting,
            pristine
          },
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={16} style={style.form} direction="column">
              <Grid item xs>
                <Field
                  name="title"
                  component={TextFieldAdapter}
                  type="text"
                  label="Title"
                />
              </Grid>

              <Grid item xs>
                <div className="buttons">
                  <Button
                    style={style.addButton}
                    type="button"
                    onClick={() => push('authors', {})}
                  >
                    Add Author
                  </Button>
                  {values.authors && (
                    <Button
                      style={style.delButton}
                      type="button"
                      onClick={() => pop('authors')}
                    >
                      Delete Author
                    </Button>
                  )}
                </div>

                <FieldArray name="authors" validate={validateAuthors}>
                  {({ fields }) =>
                    fields.map((name, index) => (
                      <Grid
                        container
                        key={name}
                        alignItems="center"
                        spacing={8}
                      >
                        <Grid item>
                          <Typography>{`Author #${index + 1}`}</Typography>
                        </Grid>

                        <Grid item xs>
                          <Field
                            name={`${name}.name`}
                            component={TextFieldAdapter}
                            label="Name"
                          />
                        </Grid>

                        <Grid item xs>
                          <Field
                            name={`${name}.surname`}
                            component={TextFieldAdapter}
                            label="Last Name"
                          />
                        </Grid>

                        <Grid item>
                          <IconButton
                            aria-label="Delete"
                            onClick={() => fields.remove(index)}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))
                  }
                </FieldArray>
              </Grid>

              <Grid item xs>
                <Field
                  name="length"
                  component={TextFieldAdapter}
                  type="number"
                  label="Pages count"
                  validate={validatePageCount}
                />
              </Grid>

              <Grid item xs>
                <Field
                  name="publisher"
                  component={TextFieldAdapter}
                  type="text"
                  label="Publisher"
                />
              </Grid>

              <Grid item xs>
                <Field
                  name="image"
                  component={TextFieldAdapter}
                  type="text"
                  label="Image"
                />
              </Grid>

              <Grid item xs>
                <Field
                  name="publicationYear"
                  component={TextFieldAdapter}
                  type="number"
                  label="Publication Year"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs>
                <Field
                  name="publicationDate"
                  component={TextFieldAdapter}
                  type="date"
                  label="Publication Date"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item xs>
                <Field
                  name="ISBN"
                  component={TextFieldAdapter}
                  type="text"
                  label="ISBN"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={style.button}
              type="submit"
              disabled={submitting || pristine}
            >
              <i className="fas fa-check-circle" />
            </Button>
          </form>
        )}
      />
    </Paper>
  );
};

export default connect(
  (state) => ({
    book: bookSelector(state),
    loading: loadingSelector(state)
  }),
  { fetchBookById, updateBook }
)(EditBook);
