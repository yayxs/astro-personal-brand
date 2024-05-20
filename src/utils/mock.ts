export default {
  type: 'list',
  ordered: false,
  spread: true,
  children: [
    {
      type: 'listItem',
      spread: true,
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'link',
              title: null,
              url: '#features',
              children: [{ type: 'text', value: 'Features' }],
            },
          ],
        },
        {
          type: 'list',
          ordered: false,
          spread: false,
          children: [
            {
              type: 'listItem',
              spread: false,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'link',
                      title: null,
                      url: '#documentation',
                      children: [{ type: 'text', value: 'Documentation' }],
                    },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              spread: false,
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'link',
                      title: null,
                      url: '#test',
                      children: [{ type: 'text', value: 'test' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
