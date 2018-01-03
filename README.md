# next-dom-focus
> Set focus for dom element.


## resources:
+ fastclick
+ http://blog.csdn.net/foralienzhou/article/details/52437929


## setSelectionRange:
```javascript
inputElement.setSelectionRange(selectionStart, selectionEnd, [optional] selectionDirection);
// selectionStart：第一个被选中的字符的序号（index），从0开始。
// selectionEnd：被选中的最后一个字符的前一个。换句换说，不包括index为selectionEnd的字符。
// selectionDirection：选择的方向。可选值为forward、backward或none。
```
