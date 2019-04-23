import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import { renderAuthors } from '../../utils/authorsFinalForm';
import { styles } from './styles';

const BooksListItem = React.memo(
  ({
    id,
    title,
    image,
    authors,
    length,
    publisher,
    publicationYear,
    publicationDate,
    ISBN,
    classes,
    deleteBook
  }) => {
    return (
      <Paper className={classes.root} style={{ margin: 16, maxWidth: '100%' }}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={title}
                src={image}
                style={{ objectFit: 'contain' }}
              />
            </ButtonBase>
          </Grid>

          <Grid item xs={6} sm container>
            <Grid
              item
              xs
              container
              direction="row"
              spacing={16}
              style={{ width: 'auto' }}
            >
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <Typography gutterBottom>{`${renderAuthors(
                  authors
                )}`}</Typography>
                <Typography variant="subtitle1">{`Pages: ${length}`}</Typography>
                <Typography color="textSecondary">{`Publisher: ${publisher}`}</Typography>
                <Typography color="textSecondary">{`Publication Year: ${publicationYear}`}</Typography>
                <Typography color="textSecondary">{`Publication Date: ${publicationDate}`}</Typography>
                <Typography color="textSecondary">{`ISBN: ${ISBN}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            container
            justify="space-between"
            direction="column"
            style={{ width: 'auto' }}
          >
            <Grid item container justify="space-between">
              <Grid item>
                <IconButton aria-label="Edit">
                  <Link to={`/books/${id}/edit`} className="fas fa-edit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Delete" onClick={() => deleteBook(id)}>
                  <i className="fas fa-trash-alt" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
);

export default withStyles(styles)(BooksListItem);
