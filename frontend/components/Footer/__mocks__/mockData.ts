/* eslint-disable max-lines */
import { Contact } from "@models/contact.model"
import { Navigation, RelatedContactInformation } from "@models/navigation.model"

const mockNavigationParent1: Navigation = {
    audience: [],
    collapsed: true,
    createdAt: '',
    id: 1,
    items: null,
    menuAttached: true,
    order: 2,
    parent: null,
    path: 'parent1',
    related: null,
    sitemap_exclude: true,
    title: 'Parent 1',
    type: '',
    uiRouterKey: 'parent1',
    updatedAt: ''
}

const mockNavigationParent2: Navigation = {
    audience: [],
    collapsed: true,
    createdAt: '',
    id: 4,
    items: null,
    menuAttached: true,
    order: 2,
    parent: null,
    path: 'parent2',
    related: null,
    sitemap_exclude: true,
    title: 'Parent 2',
    type: '',
    uiRouterKey: 'parent2',
    updatedAt: ''
}


export const mockContact: Contact = {
    id: 10,
    street: 'street',
    houseNumber: 'houseNumber',
    postalCode: 0,
    city: 'city',
    telephone: '+1234567890'
}

const mockContactInformationRelated: RelatedContactInformation = {
    createdAt: 'createdAt',
    facebook: 'facebook',
    id: 7,
    instagram: 'instagram',
    linkedin: 'linkedin',
    locale: 'en',
    navigationItemId: 0,
    publishedAt: 'publishedAt',
    sitemap_exclude: false,
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    __contentType: '__contentType'
}

const mockContactInformation: Navigation = {
    audience: [],
    collapsed: true,
    createdAt: '',
    id: 8,
    items: null,
    menuAttached: true,
    order: 0,
    parent: null,
    path: 'contact-information',
    related: mockContactInformationRelated,
    sitemap_exclude: true,
    title: 'Contact Information',
    type: '',
    uiRouterKey: 'contact-information',
    updatedAt: ''
}

const mockNavigationDataCompliantLinks: Navigation = {
    audience: [],
    collapsed: true,
    createdAt: '',
    id: 2,
    items: null,
    menuAttached: true,
    order: 2,
    parent: null,
    path: 'data-compliant-links',
    related: null,
    sitemap_exclude: true,
    title: 'Data Compliant Links',
    type: '',
    uiRouterKey: 'data-compliant-links',
    updatedAt: ''
}

export const mockNavigationData = [
    mockNavigationParent1,
    mockNavigationParent2,
    mockContactInformation,
    mockNavigationDataCompliantLinks,
]