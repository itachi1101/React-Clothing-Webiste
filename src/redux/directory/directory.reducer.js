const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80",

      linkUrl: "shop/hats",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1578198576866-7e0ba6078128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
      linkUrl: "shop/jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      linkUrl: "shop/sneakers",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1602370240543-8ca9e9f0e28f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHdvbWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      linkUrl: "shop/womens",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
