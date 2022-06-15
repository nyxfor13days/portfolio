import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	AppBar,
	Toolbar,
	Container,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	MenuList,
	ListItemIcon,
	ListItemText,
	Stack,
} from '@mui/material';
import { MenuSharp, HomeSharp } from '@mui/icons-material';

const Header = () => {
	const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
		null
	);
	const openMenu = Boolean(menuAnchorEl);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setMenuAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};

	const NavLinks = [
		{
			path: '/',
			label: 'Home',
			icon: <HomeSharp />,
		},

		{
			path: '/',
			label: 'About Me',
			icon: <HomeSharp />,
		},

		{
			path: '/',
			label: 'Home',
			icon: <HomeSharp />,
		},

		{
			path: '/',
			label: 'Home',
			icon: <HomeSharp />,
		},
	];

	return (
		<AppBar color='default' position='fixed' enableColorOnDark>
			<Container maxWidth='lg'>
				<Toolbar variant='dense'>
					<Grid
						container
						direction='row'
						justifyContent='space-between'
						alignItems='center'>
						<Grid item>
							<IconButton
								LinkComponent={motion.button}
								id='menu-button'
								aria-controls={openMenu ? 'menu' : undefined}
								aria-haspopup='true'
								aria-expanded={openMenu ? 'true' : undefined}
								onClick={handleMenuClick}>
								<MenuSharp />
							</IconButton>

							<Menu
								id='menu'
								anchorEl={menuAnchorEl}
								open={openMenu}
								onClose={handleMenuClose}
								MenuListProps={{
									'aria-labelledby': 'menu-button',
								}}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								sx={{ top: '25px' }}>
								<MenuList>
									{NavLinks.map(
										({ path, label, icon }, index) => (
											<MenuItem key={index}>
												<RouterLink to={path}>
													<Stack
														direction='row'
														alignItems='center'
														spacing={1}>
														<ListItemIcon>
															{icon}
														</ListItemIcon>

														<ListItemText>
															{label}
														</ListItemText>
													</Stack>
												</RouterLink>
											</MenuItem>
										)
									)}
								</MenuList>
							</Menu>
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;

