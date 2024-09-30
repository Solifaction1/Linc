import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { defaultProps, propsConfig } from './videoPlayer.config'

import styles from './videoPlayer.module.scss'

const VideoPlayer = ({ videoSrcURL }: propsConfig) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [playing, setPlaying] = useState(false)

	const handlePlay = () => {
		setPlaying(true)
	}

	useEffect(() => {
		if (playing) videoRef?.current?.play()
		else videoRef?.current?.pause()
	}, [playing])

	return (
		<div className={styles.videoPlayer}>
			<div
				role="button"
				tabIndex={0}
				className={styles.videoWrapper}
				onClick={handlePlay}
				onKeyDown={(e) => e?.code?.toLowerCase() === 'space' && handlePlay()}
			>
				<video ref={videoRef} controls={playing} className={styles.video}>
					<track kind="captions" />
					<source src={videoSrcURL} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				{!playing && (
					<Image
						fill
						className={styles.thumbnail}
						src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80"
						alt="Play button"
						priority
						loader={({ src }) => {
							return `/api/custom-loader?url=${encodeURIComponent(
								src
							)}?q=${100}`
						}}
					/>
				)}
				{!playing && (
					<Image
						width={30}
						height={30}
						className={styles.play}
						src="/images/play.svg"
						alt="Play button"
						priority
						loader={({ src }) => {
							return `/api/custom-loader?url=${encodeURIComponent(
								src
							)}?q=${100}`
						}}
					/>
				)}
			</div>
		</div>
	)
}

VideoPlayer.defaultProps = defaultProps

export default VideoPlayer
