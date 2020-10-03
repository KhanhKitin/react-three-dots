React-Three-Dots
================
Cross-browser multiline text ellipsis for react

<img src="http://dotdotdot.frebsite.nl/img/preview.png" width="100%" border="0" />

Install
----------------
```
npm install --save react-three-dots
```

Sample usage
----------------

Threedots(text, max_length)

```
import React from 'react'
import Threedots from 'react-three-dots'

...

render() {

	let title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

	let shortTitle = Threedots(title, 150);

	return (
		<div style={{ width: "400px", textAlign: "justify" }}>
			{shortTitle}
		</div>
	)
	
}

```

Notes
-----------------
React-three-dots is simple plugin, if you need more functionality, consider using react-truncate
https://www.npmjs.com/package/react-truncate
