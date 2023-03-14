import { Button, Container, createStyles, Grid, Group, rem, Text, Title } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}))

export function HeroText() {
  const { classes } = useStyles()

  return (
    <Container className={classes.wrapper}>
      <Grid grow>
        <Grid.Col md={8}>
          <Title order={1} align={'right'}>
            We are{' '}
            <Text component="span" className={classes.highlight} inherit>
              SnapStrat
            </Text>{' '}
            a customized decision-making SaaS
          </Title>

          <Text size="lg" color="dimmed" align={'right'} className={classes.description}>
            We build customized decision-making SaaS applications quickly on our fit-for-purpose
            platform, all based on our deep understanding of your business and your strategy.
          </Text>

          <Group position="right" mt={'xl'}>
            <Button className={classes.control} variant="default" color="gray">
              Book a demo
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col md={4}>as</Grid.Col>
      </Grid>
    </Container>
  )
}
