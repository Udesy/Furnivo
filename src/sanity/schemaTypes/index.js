export const schemaTypes = [
  {
    name: "heroSection",
    title: "Hero Section",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "imageFile",
        title: "Image File",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "slug",
        title: "Slug/ID",
        type: "string",
        description: "Unique ID to reference this Image in different sections",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: "previewBox",
    title: "Preview Box",
    type: "document",
    fields: [
      {
        name: "text",
        title: "Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subText",
        title: "Sub Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "imageFile",
        title: "Image File",
        type: "image",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "alt",
        title: "Alt Image",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: "aboutSection",
    title: "About Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "subText",
        title: "Sub Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "imageFile",
        title: "Image File",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "slug",
        title: "Slug/ID",
        type: "string",
        description: "Unique ID to reference this Image in different sections",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: "product3D",
    title: "3D Products",
    type: "document",
    fields: [
      {
        name: "productTitle",
        title: "Product Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "modelFile",
        title: "3D Model",
        type: "file",
        options: {
          accept: ".glb, .gltf",
        },
      },
      {
        name: "productImage",
        title: "Product Image",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "scale",
        title: "Model Scale",
        type: "number",
        initialValue: 1,
        validation: (Rule) => Rule.required().min(0.1).max(10),
      },
      {
        name: "lightDirection",
        title: "Light Direction",
        type: "object",
        fields: [
          {
            name: "dirX",
            title: "Direction X",
            type: "number",
            initialValue: 0,
          },
          {
            name: "dirY",
            title: "Direction Y",
            type: "number",
            initialValue: 0,
          },
          {
            name: "dirZ",
            title: "Direction Z",
            type: "number",
            initialValue: 0,
          },
        ],
      },
      {
        name: "productPrice",
        title: "Product Price",
        type: "string",
        placeholder: "$1,399",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "productCategory",
        title: "Product Category",
        type: "string",
        options: {
          list: [
            { title: "Office", value: "office" },
            { title: "Sitting Area", value: "sitting area" },
            { title: "Living Room", value: "living area" },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "productFabric",
        title: "Product Fabric",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug/ID",
        type: "number",
        description: "Unique ID to reference this Image in different sections",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: "bentoCard",
    title: "Bento Card",
    type: "document",
    fields: [
      {
        name: "title",
        title: "title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "className",
        title: "className",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "imageFile",
        title: "Image File",
        type: "image",
        options: {
          accept: ".png, .jpeg",
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "imageDescription",
        title: "Image Description",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug/ID",
        type: "number",
        description: "Unique ID to reference this Image in different sections",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
];
