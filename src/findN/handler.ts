import type { ValidatedEventAPIGatewayProxyEvent } from "../libs/apiGateway";
import { middyfy } from "../libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
    event
) => {
    const { arr, n } = event.body;

    const newArr = arr.slice(0, n);
    const sumOfn = newArr.reduce((sum, num) => (sum += num), 0);
    const multiOfn = newArr.reduce((multi, num) => (multi *= num), 1);
    return {
        message: `Sum of n elements is ${sumOfn}, result of n elements is ${multiOfn}`,
    };
};

export const findN = middyfy(handler);
