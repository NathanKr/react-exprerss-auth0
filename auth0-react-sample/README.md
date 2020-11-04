<h2>Points of interest</h2>
<ul>
<li>The react app is lestening on port 4040</li>
<li>REACT_APP_AUTH0_DOMAIN and REACT_APP_AUTH0_CLIENT_ID need to be set in .env file according to their value in the created application setting in Auth0</li>
<li>withAuthenticationRequired is used to protect route e.g. profile. i.e. a user will be navigate to login page in case he try to navigate to profile route without valid token. </li>
</ul>