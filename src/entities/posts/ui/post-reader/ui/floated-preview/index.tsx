import Badge from '@razrabs-ui/badge'
import Image from '@razrabs-ui/image'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { ShareButton, ShareType } from 'shared/ui'
import { useDisplayAnimation } from '../../lib'
import {
  DateAndShareRow,
  Layout,
  Line,
  PublicationDate,
  ShareBlock,
  StyledFloatedBlock,
  TagsBlock,
  Title,
} from './styled'
import type { Props } from './types'

export const FloatedPreview: FC<Props> = ({
  shouldDisplay,
  transitionTime,
  previewUrl,
  title,
  publicationDate,
  tags,
}) => {
  const formattedDate = format(publicationDate, 'dd MMMM, H:mm', {
    locale: ru,
  })

  const { display, fadeIn, fadeOut } = useDisplayAnimation(
    shouldDisplay,
    transitionTime,
  )

  return (
    <Layout>
      <StyledFloatedBlock
        fadeIn={fadeIn}
        fadeOut={fadeOut}
        shouldDisplay={display}
        transitionTime={transitionTime}
      >
        <Image alt={title} maxH={505} src={previewUrl} w='100%' />

        <Title uppercase size='lg'>
          {title}
        </Title>

        <DateAndShareRow>
          <PublicationDate uppercase color='secondary' size='sm'>
            {formattedDate}
          </PublicationDate>

          <ShareBlock>
            <ShareButton shareType={ShareType.Twitter} />
            <ShareButton shareType={ShareType.Url} />
          </ShareBlock>
        </DateAndShareRow>

        <Line />

        <TagsBlock>
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </TagsBlock>
      </StyledFloatedBlock>
    </Layout>
  )
}
