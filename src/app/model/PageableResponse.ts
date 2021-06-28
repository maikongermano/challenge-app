class Sort {
    sorted: boolean | undefined;
    unsorted: boolean | undefined | undefined;
    empty: boolean | undefined;
}

class Pageable {
    sort: Sort | undefined;
    offset: number | undefined;
    pageNumber: number | undefined;
    pageSize: number | undefined;
    paged: boolean | undefined;
    unpaged: boolean | undefined;
}

export class PageableResponse {
    content: any[] | undefined;
    pageable: Pageable | undefined;
    totalElements: number | undefined;
    totalPages: number | undefined;
    last: boolean | undefined;
    number: number | undefined;
    size: number | undefined;
    sort: Sort | undefined;
    numberOfElements: number | undefined;
    first: boolean | undefined;
    empty: boolean | undefined;
}