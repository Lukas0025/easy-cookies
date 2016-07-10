# easy-cookies
Open source software that is designed to facilitate operations with cookies.

#####Booting into your code:
```html
<script src="cookie.js"></script>
```
## Usage

#####Creating a cookie:
```javascript
setCookie(name, value, expire, path);
```
Examples:
```javascript
setCookie("test", "test123", "1", "/");
// cookie name is test, value is test123, expire in 1 day and path is /

setCookie("test", "test123");
// cookie name is test and value is test123
```
#####Get a cookie:
```javascript
var value = getCookie(name);
```
Example:
```javascript
var value = getCookie("test");
alert(value);
// alert output is value of cookie with name test
```
#####Delete a cookie:
```javascript
deleteCookie(name);
```
Example:
```javascript
deleteCookie("test");
//Deletes the cookie with name test
```
#####Delete all cookies:
```javascript
deleteallCookie();
```
Example:
```javascript
deleteallCookie();
//Deletes all cookies
```
#####Get all cookies:
```javascript
var allcookies = allCookie();
```
Example:
```javascript
var allcookies = allCookie();
alert(allcookies);
// alert output is name of cookie = value of cookie; next cookie
// Example:
// test1=1;test2=2
```
