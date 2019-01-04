## Getting Started

```shell
npm install browserdriver-manager
```

Once the plugin has been installed, you can require it with this line of code:

```javascript
// javascript
const browserdriverManager = require('browserdriver-manager');
```

```typescript
// typescript
import * as browserdriverManager from 'browserdriver-manager';
```

Or import just the driver that you need with this line of code:

```javascript
// javascript
const { ChromeDriver } = require('browserdriver-manager');
```

```typescript
// typescript
import { ChromeDriver } from 'browserdriver-manager';
```

## How does it work
browserdriver-manager fetches the latest version for both the chromedriver and the geckodriver when calling the getLatestVersion method on either like this:

```javascript
ChromeDriver.getLatestVersion().then((version) => {
    console.log(version); // logs: "2.45"
});
```
