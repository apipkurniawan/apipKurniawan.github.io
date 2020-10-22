import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import Util from '../../utility/util';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'loading..';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography className={styles.labelInfected} variant="h6" gutterBottom>Terkonfirmasi</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{Util.getStrDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Jumlah orang yang terkonfirmasi kasus covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.labelRecovered} variant="h6" gutterBottom>Sembuh</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{Util.getStrDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Jumlah orang yang berhasil sembuh dari covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.labelDeaths} variant="h6" gutterBottom>Meninggal</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{Util.getStrDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Jumlah orang yang meninggal karena covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;