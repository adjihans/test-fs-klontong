"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Nike Magista",
          harga: 1379000,
          image:
            "https://5.imimg.com/data5/TJ/JA/MY-73637936/c9c13839bda504d3e18709eefd641d27-500x500.jpg",
          categoryId: 1,
          sku: "MHZVTK",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Mercurial Superfly",
          harga: 1579000,
          image:
            "https://ansel.frgimages.com/nike-mercurial-superfly-6-pro-firm-ground-football-boots-grey_ss4_p-11972033+u-plg2ycuk6tnstbrrnvya+v-900d749652e6474087dccc49228a39ff.jpg?_hv=1&w=900",
          categoryId: 1,
          sku: "MHZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Mercurial Vapor",
          harga: 2668000,
          image:
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/62ed8da2-ee7b-481b-87ac-a93753c4b61b/custom-nike-mercurial-vapor-13-academy-by-you.jpg",
          categoryId: 1,
          sku: "MHZVTL",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Phantom Vision Elite V",
          harga: 245500,
          image:
            "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/tjnkmllhdyg88x5hwkgu/phantom-vision-elite-dynamic-fit-fg-football-boot-zhhjXk.jpg",
          categoryId: 1,
          sku: "MHZVTA",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Phantom Venom Elite",
          harga: 225500,
          image:
            "https://www.futbolemotion.com/imagesarticulos/127801/grandes/bota-nike-phantom-venom-elite-fg-bright-crimson-black-1.jpg",
          categoryId: 1,
          sku: "MHZVTB",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Mercurial Vapor Flyknit",
          harga: 1635000,
          image:
            "https://www.cleatsacc.com/2795-large_default/nike-mercurial-vapor-flyknit-ultra-fg-new-football-shoes-black-red.jpg",
          categoryId: 1,
          sku: "MHZVTC",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Mercurial Vapor Untouchable",
          harga: 1745000,
          image:
            "https://www.anygivensunday.shop/2711-large_default/nike-mens-vapor-untouchable-3-speed-american-football-cleats-black-gold.jpg",
          categoryId: 1,
          sku: "MHZVTD",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adidas X-19",
          harga: 3000000,
          image:
            "https://www.futbolemotion.com/imagesarticulos/131107/grandes/bota-adidas-x-19-fg-silver-metallic-hi-red-white-1.jpg",
          categoryId: 1,
          sku: "AHZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adidas Predator 20.1",
          harga: 2105000,
          image:
            "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwf91c5171/images/58874601/Rebel_58874601-00_blackwhite_hi-res.jpg?sw=558&sh=558&sm=fit",
          categoryId: 1,
          sku: "ABZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adidas Predator 19.3 Laceless",
          harga: 1055000,
          image:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/904789c75bef408ea11aa96f01064167_9366/Predator_19.3_Laceless_Firm_Ground_Boots_Red_F99730_01_standard.jpg",
          categoryId: 1,
          sku: "BHZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Precision III",
          harga: 1055000,
          image:
            "https://www.famousfootwear.com/productimages/shoes_ib92896.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60",
          categoryId: 1,
          sku: "AHZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Lebron 17",
          harga: 2713500,
          image:
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3f8039f5-ede5-449a-b707-50ee8beefb74/lebron-17-low-ph-basketball-shoe-mlQC0t.jpg",
          categoryId: 1,
          sku: "MHZVTC",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Kyrie 5",
          harga: 1875000,
          image:
            "https://cdn.shopify.com/s/files/1/0275/6018/1808/products/95870_5e04cb1827ec00.68744582_nikekyrie5custom_red_size16_photo1_large_b6c499e9-e04b-4624-9337-0ce55c4eabdb_800x.jpg?v=1594905363",
          categoryId: 1,
          sku: "MHZVTP",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Zoom Evidence II",
          harga: 925000,
          image:
            "https://cdn.runrepeat.com/i/nike/27808/nike-zoom-evidence-ii-black-anthracite-metallic-dark-grey-2fc6-600.jpg",
          categoryId: 1,
          sku: "MHBVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Jordan XXXII",
          harga: 2022500,
          image:
            "https://cdn.runrepeat.com/i/jordan/26401/air-jordan-xxxii-platinum-edad-600.jpg",
          categoryId: 1,
          sku: "APZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Jordan XXXI",
          harga: 1540500,
          image:
            "https://www.sepsale.com/media/x490/Nike_Air_Jordan_Shoes/Air_Jordan_XXXI_31_Shoes/Air_Jordan_XXXI/Nike_Air_Jordan_XXXI_31_Women_Basketball_Shoes_Sneaker_Black_White_Wolf_Grey_845037-003.jpg",
          categoryId: 1,
          sku: "NHZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Red Jordan 1",
          harga: 1500000,
          image:
            "https://di2ponv0v5otw.cloudfront.net/posts/2018/03/19/5ab0391250687c162e5a1925/m_5ab039359a945522429ff141.jpg",
          categoryId: 1,
          sku: "NAZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nike Jordan Anti-Gravity",
          harga: 1650000,
          image:
            "https://www.sepsale.com/media/x490/Nike_Air_Jordan_Shoes/Air_Jordan_XXXI_31_Shoes/Air_Jordan_XXXI/Nike_Air_Jordan_XXXI_31_Women_Basketball_Shoes_Sneaker_Black_Crimson_White_845037-001.jpg",
          categoryId: 1,
          sku: "NBZVTQ",
          weight: 500,
          width: 5,
          length: 5,
          height: 5,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
