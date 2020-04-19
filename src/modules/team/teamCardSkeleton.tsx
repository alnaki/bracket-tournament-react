import React, { Component } from "react";
import { Grid, Divider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

type Props = {
    variant?: "small" | "medium";
    edition?: boolean;
};

export default class TeamCardSkeleton extends Component<Props> {
    static defaultProps = {
        variant: "medium",
        edition: false
    };

    render() {
        switch (this.props.variant) {
            case "small":
                return (
                    <Grid container wrap="nowrap" spacing={1}>
                        <Grid item>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item zeroMinWidth>
                            <Skeleton width="70%" />
                        </Grid>
                    </Grid>
                );
            case "medium":
                return (
                    <Grid container wrap="nowrap" spacing={1}>
                        <Grid item>
                            <Skeleton variant="circle" width={40} height={40} />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item xs>
                            <Skeleton width="70%" />
                        </Grid>
                    </Grid>
                );
        }
    }
}
