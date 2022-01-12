import type { ValidatedEventAPIGatewayProxyEvent } from "../libs/apiGateway";
import { middyfy } from "../libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
    event
) => {
    const { arr } = event.body;

    const positiveSum = arr
        .filter((num) => num > 0)
        .reduce((sum, num) => (sum += num), 0);
    return {
        message: `Sum of positive is ${positiveSum}`,
    };
};

export const findPositiveSum = middyfy(handler);
