// Kenyan phone numbers regex: https://maxwellweru.com/phone-number-input-validation-in-kenya-6efd82256ea7
const SAFARICOM_REGEX = /^((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/;
const AIRTEL_REGEX = /^((?:(?:7(?:(?:3[0-9])|(?:5[0-6])|(8[5-9])))|(?:1(?:[0][0-2])))[0-9]{6})$/;

export default {
    // Display name for the type
    title: "Orders",
    name: "orders",
    type: "document",
    // Proceed to list the fields of our document
    fields: [
        {
            // Display name of the field
            title: "Phone Number",
            // ID field of this field to be used in the APIs
            name: "phoneNumber",
            // Type of this field
            type: "string",
            readOnly: true,
            validation: Rule => Rule.required().custom(v => (SAFARICOM_REGEX.test(v) || AIRTEL_REGEX.test(v)) || "Please provide a valid phone number")
        },
        {
            title: "Customer Name",
            name: "customerName",
            type: "string",
            readOnly: true,
            validation: Rule => Rule.max(50)
        },
        {
            title: "Description",
            name: "description",
            type: "text",
            readOnly: true,
        },
        {
            title: "Photos",
            name: "photos",
            type: "array",
            of: [{type: "image"}],
            readOnly: false,
            validation: Rule => Rule.required().min(1).max(12),
            options: {
                accept: ['image/png', 'image/gif', 'image/jpeg', 'image/webp']
            },
        },
        {
            title: "Fulfilled",
            name: "fulfilled",
            type: "boolean"
        }
    ]
}