import type { ValidatedEventAPIGatewayProxyEvent } from "../libs/apiGateway";
import { middyfy } from "../libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
    event
) => {
    const { arr } = event.body;

    const value = arr.find((num) => num > 0);
    const index = arr.indexOf(value);
    return {
        message: `Value: ${value}, index: ${index}`,
    };
};

export const findFirstPositive = middyfy(handler);
