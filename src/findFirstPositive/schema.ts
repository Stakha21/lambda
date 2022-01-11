export default {
    type: "object",
    properties: {
        arr: { type: "array", items: { type: "number" } },
    },
    required: ["arr"],
} as const;
