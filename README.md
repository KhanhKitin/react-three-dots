React-Three-Dots
================

<img src="https://user-images.githubusercontent.com/47603668/94992963-cb20a380-05b7-11eb-889a-dc0abea509b3.png" width="100%" border="0" />


Truncate text and add mark ...
Its create read more, see more or shorten a paragraph that is too long.
Its extremely light.

Install
----------------
```
npm install --save react-three-dots
```

Usage
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
