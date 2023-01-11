import React, { useState } from "react";
import {
	AppBar,
	Box,
	Button,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
	List,
	Link,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	toolbar: {
		"& button": {},
	},
});

export const Header = () => {
	const classes = useStyles();
	const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

	const drawerToggle = () => setDrawerOpen((state) => !state);
	return (
		<>
			<Box>
				<AppBar position="static">
					<Toolbar className={classes.toolbar}>
						<Hidden only={["md", "lg", "xl"]}>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={drawerToggle}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Link component={RouterLink} to={ROUTES.home} sx={{ flexGrow: 1 }}>
							<Typography variant="h6" component="div" sx={{ color: "white" }}>
								Movie Recomendations
							</Typography>
						</Link>

						<Button
							component={RouterLink}
							to={ROUTES.setting}
							color="inherit"
							sx={{ display: { md: "flex", xs: "none" }, mr: 4 }}
						>
							Settings
						</Button>

						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
				<Drawer anchor="left" open={isDrawerOpen} onClose={drawerToggle}>
					<Box sx={{ width: 250 }} role="presentation" onClick={drawerToggle}>
						<List>
							<ListItemButton component={RouterLink} to={ROUTES.setting}>
								<ListItemIcon>
									<SettingsApplicationsIcon fontSize="large" />
								</ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItemButton>
						</List>
					</Box>
				</Drawer>
			</Box>
		</>
	);
};
