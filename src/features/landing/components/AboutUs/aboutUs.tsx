'use client'

import React from 'react' 

export default function AboutUs() {
	return (
		<div className="bg-gradient-to-b from-chaarcoalLight to-whiteSmokeBase w-full flex items-center justify-center lg:pb-56 pb-28">
			<div className="bg-white w-[90%] pb-14 justify-evenly gap-12 rounded-xl flex flex-col border-t-8 lg:border-t-0 lg:border-l-8 border-teaRose500 py-3 lg:pt-0">
				<div className=''>
					<p className="font-bold text-xl text-center lg:text-start lg:text-3xl md:ml-11 h-1/4 pt-4 text-chaarcoalBase md:mt-5 lg:mt-12 md:self-start">
                       Conócenos más
					</p>
					<p className='flex text-slateGrayBase font-semibold text-xl mt-3  text-center lg:text-start md:ml-11 h-1/4 pt-2 w-[90%] lg:w-full mx-[55px] lg:mr-0'>
						En nuestra plataforma, ofrecemos un enfoque integral para tu bienestar mental y emocional. Nuestro equipo de profesionales está especializado en diversas áreas de la psicología para atender tus necesidades específicas.
					</p>
				</div>

				<div className='container flex flex-col gap-10 ml-3'>
					<div className='primer bloque flex flex-row justify-center gap-24'>
						<div className='primer cuadrado w-1/2'>
							<div className='flex flex-row gap-2'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJklEQVR4nO1ZW4hcRRC9vlERFRXxFfEBEgURfzQPjC/IjwQFBUVB/RERPwzGBPywu2aT3dmpml3XFyQK/qjgojHx8WEUhRgEISgSE91gNjEaXN3pupO4mpdmpO7Mne3pvY+5d2aMH1PQDNzurlvndlfVqRrP60tf+pJbarXaCazoLtb0JgNtM4C7WNMWowkqq8uXeP9nmVrz/IVG42cMVIscGv9iwCfS9LCixQZwIwPtk2E0bTCKFvbUeC4Wz2aN38Uab42KxuVxeozGVQboH3eP0fi30fhMzwAYTS82XwZ0lDWir4ZvrA6UrvKhdI/RtNWerxRG58/RoWihGBoHPACm8JauGz89PHyW0Xho9mvRA+6a2tjYaQz4hWXQuoiPsMGa/5hVcV4wNG6aBYHvdc3wiipeaoBWipNaxm+NX1++2Vo36c437nwtmB+gy5rPB/Byy49+6djw2tq1p7DGIQY6GHHU6xL3zd7pI0kAWBXn2XNBNKufwK6OjN+n1BkG6PO4KOMrvD1pv70+8Qpp3GSDqKry1Ubj0/LbEQDW+E6r0bSFNT0oTingUvcnAYDSIqPxWGv0ocmOjW6+XNEyJyqszKwjAYBfoEdios+K7gCwnRXwpVw6YgCYwsh1DPSnZfRucdiuncCBNWMXhAlGHHD/4OB59rw/gFcYwBcYcEKc2wANujpqSp3sApBnPpRvM5r2WHPbf0U80+um2CGQAb9qMV7R3Qz4h+MbM64OSWqpmVrTTEXhtV01vg6gdKcVAj9tPi+MzreTWJhpo04gyBnJxld9hbd6vZCAYc6ewETzOeBH1vPvxYCaUqe6+6fV8MVGUyXCQY/K9REqIonR64XUxsdPatzt8KXvNgFomgnJ1nRh+Jqo/YHxQN+4xrf7frbYaS6nrii814o+5vfVIxeFc3JVopxWnFPuvDDIqC/fLgATwU4zh1UD+IaVWCB9PQ0GjHQuJT6SBQAHX94xPs8JGE0/hgp8Vboh9cWNa9U6cEKosANoVeIA2u6y01zUwk4w7dCF8Fo1EtH7rPFhIXINXakFD0dlY4udZiZ3dpiMijBZJC8Atr5+ZnrNGqfCDQcUnd9FAMWkYTTtdNlpw/hPMhU4DDjecKCdElLtKssAPs6avpRTikpeSQDS1hooLUgvMWlxKgC5NgzlJb4aPcfOwNI2SaMPnQAIs3cUiKDIz8tSgwgA9Fs79MGVPInMBMU+rZf73ggM63O3WWpKnch6NisLiZM2iX06zSgE9Jrr9FFUgoF+MppediNNT8R/Dpfbx1gBvCkxD2h625lLiDa4P60k7VhY0w4LwNeRa+pRpGmYD3RHOGeAvj0udDoUm/f7qvSUFyMM+IoV6j5w+0itRLG8pOcFTSgM0t+sv6gKtNSLEanQrBg+5aVIREm5pye9UaNxs3VnYxu18mUN0OHG2oPt6I4r6rmbvVFToMes+/rD3nL59Ni1EVTbAC1lwLfkN6Y3eqynvVEJly38XtOH0plud3+4V36PW2/U1/ho65fBaWmzMOCTcsxcKD8kf3RkTWT/WW9UxADqpOMWCu1Fdqibd/qQOx9HkbkXAALFipa1MMYWp6PN7ikYKN9nGbLD1RdVpHAe9plFgjher7Selc5C6/8E+HpVjVwZNIQLeL/RxBbAgSS91QAMTc4lcKUFXi9FaubETFsfP1eHhs5N1AO0omvsM/O/lBpfTfCNvaxK16fpqYYn0Cn7zCtBvxNwowHc3WCm21iTyhJy+9KXvni55F+0kUGpqgE4VAAAAABJRU5ErkJggg=="/>
								<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
									Psicología Clínica
								</p>
							</div>
							
							<p className='text-slateGrayBase font-semibold text-lg mt-[10px] ml-2'>
							Trabajamos contigo para superar problemas emocionales y psicológicos que afectan tu vida diaria. Nuestro objetivo es ayudarte a encontrar el equilibrio y el bienestar que mereces.
							</p>
						</div>

						<div className='segundo cuadrado w-1/2'>
							<div className='flex flex-row gap-2'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGHklEQVR4nO1Za4gcRRBeEzU+8YFvxBcqSnwEVAQlf4zkh+IPNVGPaECMqD+CDxI0D+3qyePutmrucuqfENQ/inhqIIoGQwiICb6QGDAYURLMGS6X2+49L+/EZKXmdnZrZ7t35nK3dygpGG5up7q6vumq6q9rcrmT8j+RQUUX7VV4SalUOiX3X5E+lb/MAL1lNBqrqRRdQIMW8BOj6J5Yzwbh7RZwldW0K9YzgHss4DtWtV01Ls4bhbdETsSOOy4D1GUC0gbwiFdHYz8DHFPnS0pNsIC/JJwtpAGqWaWa3/C3klKnjhkAE+AT4g0Wi5qmxc/2KLrRavrY4fhXAwHdEecIh5ipDb1ZYwbAAn1UnRgXJJ+zkwZwmwD5u+sNW02vCZ33xwyAAfqjAkDlb3PpFIE+qzoXfu7UUfkpMoya7nhJqdMt4FMG8FA8cZ96+xyXrtEYiLcbuHQGVHihCKF9JsDHSl1dk5rh+AQD4XMW8K/aCkKHfXXfaAQBALx2NR1O5MqfRcCnS93dE0fF+ULQebPR9FN9icR/jKblvnFZALCwDbblqFQ/DKiO63IjEV5Sq3FvwvguA/hqv2q/ItYbUOH1Bmg7X3zvA+DSYymotiutxsVWU28CxEBBh4/mTkSKCh8xmo4Jg/st0KIdSp2R1DWA85POugDU/AY4P2mnF/FsnsNqOijC9JgNwieH5XxB490W8ICoEL+aoGOyT99omieAdngBAHUKx+Z57QUdk+VGyTs5+5TJ+dLKladZTVuFQ1sHWlsvcOlyBbK6fSqXQOHs8z4AFugFWTatbp/qq2JcoQzgzwLw5kxEcSjuqzHoIltxLDt4TZFZqQ8AP2MdB2faLnMiluISvLaWduBD6QA0fSoGvJEhZKp1XIUPpFUhq/HBKJ/qwJMzpCxgqwil91IBWE098YB+RTe5dCorMPR2tjLr/DtovyFrGWVdHmM5VIEGfSswNFfHneIlbUsFIHdZ3nlTB4xwH0gTDjuxSn2pA4ymLWXlLY7K1Go0rjFAq43GpY14fFYARZWfwrbKNtfwHLLiRHlQJY470xEv67rYBuFs/sv/71nacbkF+tJBj+Nl/cC2tZ03XAA8xvJY77kBv+C5izr/sMiBDakAaiZZglcbjTv8k1S3/WQ5tEBKPFfyWX97+7lG449pdnnuIuCaNFLoFObvVuP3kvvwGXZohw5nWqAPDeBxsbyr5Hj55vi+Flx0Po7tHo9s6XBmefd/V3IjA1SZg3lZZgAFwGfEJIcKKj89qWMCmiPLaJ0Nlb+fr+TvrFuxHdAcx7jpspiUfVif2XmZzL5TV8UZTXnmLo2YqcP28jLfyTewu1AC4HKa2fnazKd9TLJyYyx9EU2hSjeDfco8OIrxajVYmxsnsRrXVuJf4YzMAwuAL4sk6nTp8Imp0fFvl1Jn8Vi++N6nV+rqmuQ7fRmNK0QheCkzgPLhIgawpN4wLTeajsYbngFqqbMBNFeE4dw6G0AtYtM86sqhaLOs2lg0aisgq4i4FmbdyJIJaj1VzAKtrPqRfzY7AIUzGuVA+Rx7SJa6aEWC8NY0AKwTr54tl+jocq0A4PphUWlnFdK033fo4Ni2gOtEucVUAIAo9Nf58oMPUXFPlY+VTCsyA6jbBzQu9oLVNE2swuY0AKxTTUya5rWr8D4RXhtzw5XETnzE6Py9Lj3+JuCiu14AogE8WCaM/tWljQbIulhAJi5kNH0tk8wAPV6n1909UTSnDqYBiDsOUVOse5SaVz7h3o8F3J3gJBuYdDGjTFIDmYgNQqhOt6nCxz9uq9RR3SisRqczZ5sNiA8fRuObyS8tURgoNeFEAZQ84dc0KarOawyQlk0vXyIawNVitVa7dHYvW3GpqwA0XazGb8VOXZfYLAXATdXVCr9x6RigFlGqN+XGSizQ6yKUetkRbtDuDMMzo55/EM62gJX+ptV4gL8r8DPWiZq5QLNqCsRwuM5Ipag6z09WpxFeva7GQFOlX+NdHLeNHDNAPSbxUaSexOFu/viXGw+JViJillG893By8+fWKEeAXmSuz+14o+kVC/Rd9GyoAPTwLmsBF7CNcXH+pJyUXCT/ApHQF01CrQLwAAAAAElFTkSuQmCC"></img>
								<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
								Neuropsicología
								</p>
							</div>
							<p className='text-slateGrayBase font-semibold text-lg mt-[10px] ml-2'>
								Evaluamos y tratamos problemas cognitivos y de comportamiento relacionados con el funcionamiento del cerebro. Te ayudamos a mejorar tu memoria, atención y otras habilidades cognitivas.
							</p>
						</div>
					</div>

					<div className='segundo bloque flex flex-row justify-center gap-24'>
						<div className='tercer cudrado w-1/2'>
							<div className='flex flex-row gap-2'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAADmklEQVR4nO2YSWgUURCG2wVxxQUvIqIGF0QRF1Dx4oIHPYooiIgHjx5EERdE3qtOJJmp6olIEARPIgpREARFD6K4IHrx7IYbosZ+r8e4i9pSme31TE/P4PSYDvpDHTJU3nxd895fr9qy/muA6ZUQI5WdmZu1aXHc0dOWmRQrrC/EMC0RNdAnDeQ3LSTd80RqUSzQGvB0U2EhAN7r2p1zGgJ2hbOssKCS+F0DndWSjscaQCc04IMSOJ5rrMoSDxQWcyXuspqkt6JrtJKk+4oD6DW0mJbYXqy0cNZaTZQCul/4rr8O/c5OzVaAbRqoo2pIOpQVzoTEQGvAO/UcOgV4NDHQCvBUnU6xMzHQvhBDlaDlrkivqRaeSC+ofNgQ6BeOM8ITuFqBs7H+wPOG5R2uludBen2PoFmNFKgC2gVng5LY0+zmoCRdKD9gfwStwVmhJP74W11NSbzu+/6ghqAV0DVj0SsaaL+SuC/mOKwAVbERifSaAoyWuDXE9vbrjo6x1Sst8XP+j1d8SKwmyZW43XCGQ/yZB86qCMs7Uh26mET3mwXMYncx7g/tfZ/ZmbkK6Fs4NO2xkgjNyopMS6XtOUusMiUKul79G9BZkWmp5a++EIPf26mZfI2MG9rPTUdvcv+PH2pCK6CTeX/9qiRtDst5KsRwDXgzf+o9btNR0IptVtKO14ijKvNouWmXWtJBJemG8cCXI6G1SM8vs6EnoQ9m46bg6ceLUdC6ZH233qVSYwo5nugcp4G+RDSm7y7g0kho3hZK4q+av0Y5kKQzdUFDEDwrnBkR3fSlAlyXq2bt7bFbS8rynMYzYVgOt2UF2KUlfdSAd/lho6AV0NXcmkHwIDTe4csW34v4ewONr7/cI2vT4sLcl4e87dm00Kjs2aqL9afluTzNGxVXkh4mHppVWfEBAB0Bnmzo0osffF8fdH5PcVMov8PGKcWNolSgvWE55h6vlpOD5ldZpYPwTAN2F0PSGS1pS8Xibc5kDXgskBsVki6Z0xG7RDUefkPK9+zI6YYHzoBnVt5rf/YKmlisWCtNUZIeRzSBWnHCikNK4Dye3czuZwabfqPAig+aJOF3dw+x4lS2vX187kaXaeGf1IQuB+at1PfSO58fFboVpzZzlAvd657AlQrwkVG552Gtut+lgwfUNSvsic5pVhKlDejEVzgCOtnArJzHGluiFadbSZeWuI0tkA/ggAA2uxMPlcUP/usf02+5nRGReUcwZQAAAABJRU5ErkJggg=="/>								
								<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
									Terapia de Lenguaje
								</p>
							</div>
							
							<p className='text-slateGrayBase font-semibold text-lg mt-[10px] ml-2'>
								Ofrecemos apoyo a personas con dificultades en la comunicación, ya sea en el habla, la comprensión o la expresión. Nuestro objetivo es mejorar tus habilidades de comunicación para una vida más plena.
							</p>
						</div>

						<div className='cuarto cuadrado w-1/2'>
							<div className='flex flex-row gap-1'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHElEQVR4nO1aaYgcRRSuaDziFQ888IgRRFQQFU9I0BghiVHUqME7iKjghfjHA5R61Wuys/1e7SGrsEh+ePwKgYgIHhEUIvpP8kPwQoV1c7ld1ZNolI2aljfHbnXP9Mzs7Hbv/ugP6terel1fvVfvqBkhChQoUKBATtiDeHzo0ZV/SDyjWx1WlpaUPbrK9uD5Yr5gXPadbQF3W0WRATxsFX4dKn1Tp+uNh/dZhd/x+qmBP1hPb8h25x3AAN0b3xhFRtF/FujJdmutov7k2gTJN8VcYp/0z7KAow0EAf8NpL4+bZ0FfLg1sZoejx7LlVA0MnKUe7+ioaFjrKTlRuFg1TUnT/6jpuujaIFR+LND4m+r8JVQ4goL+LJVdNCR7YqkPCIXYlaWlljAsap1qKdBDrjZsd4hJp6cMy7p4oQbvxDXQc+6cg5WWfOqwCp8avLDQOXkqVqgB92NBa/pc0QCFQs5c8YVXhOXDyxNkF8t8oBN3JVA4XUJuXYDy6jWixp0ePqyxL16omGOwh3VA8SxstSnijxgeui8SjScdD36MZD+qsppAz1nFE04d25HMx1sbQu419Fh2eIuiV+lPNZKvCE3YnUYwLc7inQKbxEpCACfbxJhDxuF26ItW44UcwVbKi02gDtbkgPsbaWjZr2tzdbmFkDSsE8On2CA3oi7YTV0d1pdsIWsopc4MDmHMjbe13eimA+wbEVFq43S6zm4dONSlTyp9I2h8tfNpD4t0CnKvb2nGKnXBh49yuGc04RR/rLpWo/dkItttn4ocWUgh04Sc9niGIXDTe5b/d7s5tDeSUdhFL2T1MOVjVH4HqcdkSdGtV5kgb7qJBVwnZimh++nAQrapJKQa9bcyBmFr3dErN76NNlcIEvntiPmlnhhD16QObG9GwfPjLkQ4KiRes3+TZtO4/tX3TS+yO2Os8FPGg4I8N0EgS9ZD1c5XO0YwC8SHrA1c3LW0xtiyVbiyqbzgEbc+8N3NFEAHHJLtEjKo931kZQLDeBnrgdkniKMQnDIHUzrs6yk22PFtcRLHdltcZm/KkXH8riL6/VZchNWke9WEmnzOB2ktTQWSDoWmWjW7znVy54pPf4dWfFq2JgF+l50Qc4AfeC47DeiBUJFN1fcExAz78Z/l3QRtyqVgAH0dHeWq3bxNeu/JeYTIikXhnLg5FZz0shVHpPiUbLtC9m8g0khZxXeGg8m+tp2unZJeRwfgvX0Q/ywlOnGQ4l3VRrNUmnxtMkBveqmCO62232P2yonbTwjskKg9N2dJNY0cgbofYfczk6+aRVtd7756WzyicEC9jmb/k1M23LO4y3g5rT1aeUel2wilzyncH+t1GoY/AyeJMcVRiKYpEZbF6FHj8SrooGlOZDrfDA57tbjFQeC9fwHuPJIGyyvvUBPkVP+umzIOQFhOoPzYyjpzm7WJgf/KiSyAOcprioSFgj53bE+LNCfCfkgrz2wceh0C3RgRuQA/+IGV2QFA/7j7gfdij/ljkwmfO4ijMKfurIY0C/cFmVGbKbk6uCXrtjGpV7D/WB98EtzQr5W5AEzC+Q4wMRd118W0yH9K+I6cEUe3ERBThWWiwq3VLneObp/6sRpgn8fd+WBxHsc+T/NKv/AG7gkFuo9fbkrL0t9oSsvy/6r8+Am+BnP+d9If1LO0dECfltL4MMtfr76uKZje/L5nfs2C/Rh7YA+5wY5S04Nm2OSqfIoWtBKXgdXLTORFyhQoEABMQv4H7r6if9zVrOhAAAAAElFTkSuQmCC"/>									
								<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
									Psicologia Educativa
								</p>
							</div>
							
							<p className='text-slateGrayBase font-semibold text-lg mt-[10px] ml-2'>
								Apoyamos a niños y adolescentes en su desarrollo académico y emocional. Trabajamos con dificultades de aprendizaje, problemas de conducta y estrategias para mejorar el rendimiento escolar.
							</p>
						</div>

					</div>
				</div>
	
			</div>
		</div>
	)
}
