import type { ValidatedEventAPIGatewayProxyEvent } from "../libs/apiGateway";
import { middyfy } from "../libs/lambda";

import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
    event
) => {
    const { arr } = event.body;

    const sortedByName = arr
        .slice()
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1));

    const sortedByBirthday = arr
        .slice()
        .sort((b, a) => +new Date(b.birthday) - +new Date(a.birthday));

    return {
        message: { sortedByName, sortedByBirthday },
    };
};

export const sortArr = middyfy(handler);
