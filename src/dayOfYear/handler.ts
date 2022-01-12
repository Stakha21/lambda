import type { ValidatedEventAPIGatewayProxyEvent } from "../libs/apiGateway";
import { middyfy } from "../libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
    _
) => {
    const now = new Date();
    const timeStamp = +now - +new Date(now.getFullYear(), 0, 1, 2, 0);
    const day = Math.ceil(timeStamp / (1000 * 60 * 60 * 24));
    return {
        message: `Today is ${day} day of the year!`,
    };
};

export const dayOfYear = middyfy(handler);
