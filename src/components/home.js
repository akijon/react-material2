import React from 'react'
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
const styles = {
	root: {
	  flexGrow: 1,
	},
	flex: {
	  flex: 1,
	},
	menuButton: {
	  marginLeft: -12,
	  marginRight: 20,
	},
  };

function Home(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="title" color="inherit" className={classes.flex}>
					IRJA
				</Typography>
				<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
