export default {
    type: "object",
    properties: {
        arr: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    birthday: { type: "string" },
                },
            },
        },
    },
    required: ["arr"],
} as const;
