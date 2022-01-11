export default {
    type: "object",
    properties: {
        arr: { type: "array", items: { type: "number" } },
        n: { type: "number" },
    },
    required: ["arr", "n"],
} as const;
