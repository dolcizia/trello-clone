import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TrelloBoard from '../components/TrelloBoard';
import Home from '../components/Home';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/:boardID" exact component={TrelloBoard} />
			</div>
		</Router>
	);
};

export default AppRouter;
