import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    DescriptionCard: {
        width: "100%",
        height: 100,
        marginTop: "1%",
    }
}

class DescriptionVideoCard extends Component {

    state = {
        videoDescription: null,
        views: null,
        date: null,
    }

    render() {
        return (
            <Card style={styles.DescriptionCard}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.videoDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default DescriptionVideoCard;