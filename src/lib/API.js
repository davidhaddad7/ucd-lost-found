export const CreateNewFoundItem = async () => {
    console.log("MOCK CREATE NEW FOUND ITEM");
    return 5;
}

export const CreateNewLostItem = async () => {
    console.log("MOCK CREATE NEW LOST ITEM");
    return 4;
}

export const GetItemsData = async (queryIDList) => {
    const MOCKED_DATA = [
          {
            id:1,
            category:"headphones",
            date:"May 11th 4:00pm",
            name:"Beats Headphones",
            description:"I was studying in the library and forgot them on the table in the basement",
            location: "Shields Library",
            image:null
          },
          {
            id:2,
            category:"bag",
            date:"May 12th 4:00pm",
            name:"Beats bag",
            description:"I was studying in the library and forgot them on the table in the basement",
            location: "Shields Library",//"Quad main campus",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/440px-Bucephala-albeola-010.jpg"
          },
          {
            id:3,
            category:"glasses",
            date:"May 13th 4:00pm",
            name:"Beats glasses",
            description:"I was studying in the library and forgot them on the table in the basement",
            location: "dairy rd",
            image:null
          },
          {
            id:4,
            category:"eyes",
            date:"May 14th 4:00pm",
            name:"Beats eyes",
            description:"I was studying in the library and forgot them on the table in the basement",
            location: "Kemper Hall",
            image:null
          },
          {
            id:5,
            category:"soap",
            date:"May 15th 4:00pm",
            name:"Beats soap",
            description:"I was studying in the library and forgot them on the table in the basement",
            location: "Arboretum",
            image:null
          }
    ];


    return MOCKED_DATA;
}
