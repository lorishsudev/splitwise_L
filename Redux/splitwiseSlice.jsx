import { createSlice, current } from '@reduxjs/toolkit';


// 把你需要的global state全部都放在這裡
const initialState = {
  changed: false,
  friends: [],
  avatarlist: [],
  group: [
    {
      id: '0',
      name: 'Non-group expense',
      type: 'Home',
      result: 'no expense >',
    },
  ],
  totalfriends: 0,
  friendautoid: 1,
};


export const splitwiseSlice = createSlice({
  name: 'splitwise',
  initialState,

  reducers: {
    addFriend(state, action) {
      state.changed = true;
      const newItem = action.payload;
      console.log(newItem);
      // 執行新增：push
      state.friends.push(newItem);
      state.totalfriends = state.friends.length;
      state.friendautoid = state.friendautoid + 1;
      state.changed = false;
    },

    editFriend(state, action) {
      state.changed = true;
      const { id, newData } = action.payload;
      //獲取索引位址
      const index = state.friends.findIndex(friend => friend.id === id);
      console.log(index)
      const index2 = state.avatarlist.findIndex(friend => friend.id === id);
      console.log(index2)
      //建立物件並更新資料
      if(index != -1){
        state.friends[index] = Object.assign({}, state.friends[index], newData);
      }
      
      if(index2 != -1){
        state.avatarlist[index] = Object.assign({}, state.avatarlist[index2], newData);
      }
      console.log(state.friends)
      console.log(state.avatarlist)
      state.changed = false;
    },

    deleteFriend(state, action) {
      state.changed = true;
      //獲取要刪除的id
      const deleteId = action.payload;
      //console.log(deleteId);

      //*1. filter方法 :
      //利用filter篩選friens的id，將列表中id與deleteId不同的資料留下，最後再更新friends陣列(state.friends)
      //state.friends = state.friends.filter(friend => friend.id !== deleteId);
      
      //*2. splice方法 :
      //利用findindex找到deleteId在friends陣列中的索引位置，再使用splice將該位置元素刪除
      const index = state.friends.findIndex(friend => friend.id === deleteId);  //若index=-1表示找不到，這裡是拋值進來不會找不到
      //console.log(index)
      state.friends.splice(index, 1);

      state.totalfriends = state.friends.length;
      state.changed = false;
    },

    addAvatarlist(state, action) {
      state.changed = true;
      const id = action.payload;
      //執行新增
      const index = state.friends.findIndex(friend => friend.id === id);
      state.avatarlist.push(state.friends[index])
      console.log(state.avatarlist)
      state.changed = false
    },

    deleteAvatarlist(state, action) {
      state.changed = true;
      const deleteId = action.payload;
      const index = state.avatarlist.findIndex(friend => friend.id === deleteId);
      state.avatarlist.splice(index, 1);
      state.changed = false
    },

    clearAvatarlist(state, action) {
      state.avatarlist = [];
    },

    reset(state, action) {
      state.changed = true;
      state.totalfriends = 0;
      state.friendautoid = 1;
      state.friends = [];
      state.avatarlist = [];
      state.changed = false;
    },

    addGroup(state, action) {
      state.changed = true;
      const newItem = action.payload;
      state.group.push(newItem);
      state.changed = false;
    },

    clearGroup(state, action) {
      state.group = [
        {
          id: '0',
          name: 'Non-group expense',
          type: 'Home',
          result: 'no expense >',
        },
      ];
    },
  },
});

export const { addFriend, editFriend , deleteFriend ,addAvatarlist , deleteAvatarlist , clearAvatarlist , reset, addGroup, clearGroup } = splitwiseSlice.actions;

export default splitwiseSlice.reducer;
