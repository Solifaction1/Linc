import React from 'react';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import Eye from '@strapi/icons/Eye';
import { LinkButton } from '@strapi/design-system/LinkButton';

const PreviewLink = () => {
    const { initialData, allLayoutData } = useCMEditViewDataManager();
    if (!initialData.slug) {
        return null;
    }

    return (
        <LinkButton
            size="S"
            startIcon={<Eye />}
            style={{ width: '100%' }}
            href={`${CLIENT_FRONTEND_URL}/api/preview?secret=${CLIENT_PREVIEW_SECRET}&collection=${allLayoutData.contentType?.info?.pluralName}&slug=${initialData.slug}&locale=${initialData?.locale}`}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            title="page preview"
        >Preview
        </LinkButton>
    );
};

export default PreviewLink;