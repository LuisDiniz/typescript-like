import { Like } from './like'

let like = new Like(99);
console.log(`Button Selected: ${like.isSelected} - Number of Likes: ${like.likesCount}`);
like.onClick();
console.log(`onClick - Button Selected: ${like.isSelected} - Number of Likes: ${like.likesCount}`);
like.onClick();
console.log(`onClick - Button Selected: ${like.isSelected} - Number of Likes: ${like.likesCount}`);