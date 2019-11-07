import React from 'react';

const BlogDetailImages = ({gallery}) =>
    gallery.map((image, i) => {
        return (
            <div key={`${image.sys.id}-${i}`}>
                <figure>
                    <a href={image.fields.file.url}>
                        <img
                            data-src={image.fields.file.url}
                            width="300"
                            alt={image.fields.title}
                            data-uk-img
                        />
                    </a>
                </figure>
            </div>
        );
    });

export default BlogDetailImages;
