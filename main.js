"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Like(100);
console.log("Button Selected: " + like.isSelected + " - Number of Likes: " + like.likesCount);
like.onClick();
console.log("onClick - Button Selected: " + like.isSelected + " - Number of Likes: " + like.likesCount);
like.onClick();
console.log("onClick - Button Selected: " + like.isSelected + " - Number of Likes: " + like.likesCount);
