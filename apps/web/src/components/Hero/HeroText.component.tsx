import { createStyles, Title, Text, Button, Container, rem, Group, Grid } from '@omni/ui'

import { SomeLotties } from '~/components/lotties/someLotties'

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

export function HeroTextComponent() {
  const { classes } = useStyles()

  return (
    <Container size={1400} mt={80}>
      <Grid grow justify="center" align="center">
        <Grid.Col md={5}>
          <Title order={1} size={rem(48)} align={'left'}>
            <Text component="span" color={'yellow'} inherit>
              Omni Stack
            </Text>{' '}
            a customized SaaS builder
          </Title>

          <Text size="md" color="dimmed" align={'left'}>
            Build fully functional accessible web applications faster than ever. Using Turbo Pack,
            NextJS, React Native, Serverless & Mantine.
          </Text>

          <Group position="right" mt={'xl'}>
            <Button className={classes.control} variant="outline">
              Getting start
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col md={6}>
          <SomeLotties />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
