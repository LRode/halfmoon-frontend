export default function getQueryParam(router, queryKey) {
    // regex magic to get the value of the query param
    // usually would just use router.query but it doesn't get populated until the second render,
    // which results in a flicker of the wrong data
    let queryValue = router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));
    queryValue = queryValue && queryValue[1];
    queryValue = router.query[queryKey] || queryValue;

    return queryValue;
};
