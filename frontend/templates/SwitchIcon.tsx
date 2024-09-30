/* eslint-disable max-lines */
import React from 'react'

// ALL ICONS CAN BE FOUND HERE: https://iconscout.com/unicons/explore/line

import {
	UilGrin,
	UilBookAlt,
	UilPostcard,
	UilCommentQuestion,
	UilDashboard,
	UilBookOpen,
	UilCircleLayer,
	UilHeartMedical,
	UilComments,
	UilArrowRight,
	UilArrowLeft,
	UilArrowDown,
	UilArrowUp,
	UilAngleDown,
	UilAngleUp,
	UilCheck,
	UilFacebookF,
	UilInstagram,
	UilLinkedin,
	UilExternalLinkAlt,
	UilDownloadAlt,
	UilHeart,
	UilInfoCircle,
	UilPlay,
	UilEnvelope,
	UilMobileAndroid,
	UilLocationPoint,
	UilSlidersV,
	UilTimes,
	UilTelescope,
	UilMedal,
	UilPresentationPlay,
	UilAngleRight,
	UilAngleLeft,
	UilProcess,
	UilShieldCheck,
	UilBoltAlt,
	UilFocusTarget,
	UilCommentsAlt,
	UilNewspaper,
	UilCalender,
	UilChartPieAlt,
	UilArrowUpRight,
	UilPlus,
	UilMinus,
} from '@iconscout/react-unicons'
import { propsConfig, Icon } from './switch-icon.config'

const SwitchIcon = ({ icon, className }: propsConfig) => {
	switch (icon) {
		case Icon.GRIN:
			return <UilGrin className={className} />
		case Icon.BOOK_ALT:
			return <UilBookAlt className={className} />
		case Icon.POSTCARD:
			return <UilPostcard className={className} />
		case Icon.COMMENT_QUESTION:
			return <UilCommentQuestion className={className} />
		case Icon.DASHBOARD:
			return <UilDashboard className={className} />
		case Icon.BOOK_OPEN:
			return <UilBookOpen className={className} />
		case Icon.CIRCLE_LAYER:
			return <UilCircleLayer className={className} />
		case Icon.HEART_MEDICAL:
			return <UilHeartMedical className={className} />
		case Icon.COMMENTS:
			return <UilComments className={className} />
		case Icon.ARROW_RIGHT:
			return <UilArrowRight className={className} />
		case Icon.ARROW_LEFT:
			return <UilArrowLeft className={className} />
		case Icon.ARROW_DOWN:
			return <UilArrowDown className={className} />
		case Icon.ARROW_UP:
			return <UilArrowUp className={className} />
		case Icon.ANGLE_UP:
			return <UilAngleUp className={className} />
		case Icon.ANGLE_DOWN:
			return <UilAngleDown className={className} />
		case Icon.CHECK:
			return <UilCheck className={className} />
		case Icon.EXTERNAL_LINK:
			return <UilExternalLinkAlt className={className} />
		case Icon.DOWNLOAD:
			return <UilDownloadAlt className={className} />
		case Icon.HEART:
			return <UilHeart className={className} />
		case Icon.INFO:
			return <UilInfoCircle className={className} />
		case Icon.INSTAGRAM:
			return <UilInstagram className={className} />
		case Icon.FACEBOOK:
			return <UilFacebookF className={className} />
		case Icon.LINKEDIN:
			return <UilLinkedin className={className} />
		case Icon.ENVELOPE:
			return <UilEnvelope className={className} />
		case Icon.MOBILE_ANDROID:
			return <UilMobileAndroid className={className} />
		case Icon.LOCATION_POINT:
			return <UilLocationPoint className={className} />
		case Icon.PLAY:
			return <UilPlay className={className} />
		case Icon.SLIDERS:
			return <UilSlidersV className={className} />
		case Icon.ENVELOPPE:
			return <UilEnvelope className={className} />
		case Icon.MOBILE:
			return <UilMobileAndroid className={className} />
		case Icon.CLOSE:
			return <UilTimes className={className} />
		case Icon.TELESCOPE:
			return <UilTelescope className={className} />
		case Icon.MEDAL:
			return <UilMedal className={className} />
		case Icon.PRESENTATION_PLAY:
			return <UilPresentationPlay className={className} />
		case Icon.ANGLE_RIGHT:
			return <UilAngleRight className={className} />
		case Icon.ANGLE_LEFT:
			return <UilAngleLeft className={className} />
		case Icon.PROCESS:
			return <UilProcess className={className} />
		case Icon.SHIELD_CHECK:
			return <UilShieldCheck className={className} />
		case Icon.BOLT_ALT:
			return <UilBoltAlt className={className} />
		case Icon.FOCUS_TARGET:
			return <UilFocusTarget className={className} />
		case Icon.COMMENTS_ALT:
			return <UilCommentsAlt className={className} />
		case Icon.NEWSPAPER:
			return <UilNewspaper className={className} />
		case Icon.CALENDER:
			return <UilCalender className={className} />
		case Icon.CHART_PIE_ALT:
			return <UilChartPieAlt className={className} />
		case Icon.ARROW_UP_RIGHT:
			return <UilArrowUpRight className={className} />
		case Icon.PLUS:
			return <UilPlus className={className} />
		case Icon.MINUS:
			return <UilMinus className={className} />
		default:
			return null
	}
}

export default SwitchIcon
