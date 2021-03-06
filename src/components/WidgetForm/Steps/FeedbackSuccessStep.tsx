import { FC, Fragment } from 'react'
import { CloseButton } from '../../CloseButton'

import successImageUrl from '../../../assets/success.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested(): void
}

export const FeedbackSuccessStep: FC<FeedbackSuccessStepProps> = (props) => {
  const t = useTranslations('components.widget-form.success-step')

  return (
    <Fragment>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <Image alt={t('header-image-alt')} src={successImageUrl} />

        <span className="text-xl mt-2">{t('success-text')}</span>

        <button
          onClick={props.onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          {t('button-text')}
        </button>
      </div>
    </Fragment>
  )
}
